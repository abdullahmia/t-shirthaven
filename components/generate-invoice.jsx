"use client";

import { SITE_NAME } from "@/constants";
import { formatDate } from "@/utils/date";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from "./ui/button";

const transformOrderData = (order) => {
  return {
    id: order.id,
    date: formatDate(order?.createdAt),
    customer: {
      name: order.shippingAddress.name,
      email: order.user.email,
      address: order.shippingAddress.street,
      city: order.shippingAddress.city,
      country: order.shippingAddress.country,
    },
    items: order.products.map((item) => ({
      name: item?.product?.title,
      quantity: item.quantity,
      price: item.price,
    })),
    subtotal: order.totalAmount,
    tax: 0,
    total: order.totalAmount,
  };
};

export default function GenerateInvoice({
  variant = "link",
  label,
  order: orderData,
}) {
  /**
   * Download invoice
   */
  const downloadInvoice = () => {
    const order = transformOrderData(orderData);

    const doc = new jsPDF();

    // Add company information in the header
    doc.setFontSize(14);
    doc.text(SITE_NAME || "T-shitheaven", 105, 15, { align: "center" });
    doc.setFontSize(10);
    doc.text("12 Street, Block D", 105, 20, { align: "center" });
    doc.text("New York, Calafonia, 150", 105, 25, { align: "center" });
    doc.text("Phone: (555) 555-5555", 105, 30, { align: "center" });
    doc.text("Email: info@tshirtheaven.com", 105, 35, { align: "center" });

    // Add order details under the company info
    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 14, 45);
    doc.text(`Order Date: ${order.date}`, 14, 50);
    doc.text(`Customer: ${order.customer.name}`, 14, 55);
    doc.text(`Email: ${order.customer.email}`, 14, 60);

    // Add a table with products in the middle
    const products = order.items.map((item) => [
      item.name,
      item.quantity,
      `$${item.price.toFixed(2)}`,
      `$${(item.quantity * item.price).toFixed(2)}`,
    ]);

    doc.autoTable({
      startY: 70,
      head: [["Product", "Quantity", "Price", "Total"]],
      body: products,
      theme: "striped",
      margin: { top: 10, bottom: 20 },
    });

    // Add the total price below the table
    const finalY = doc.previousAutoTable.finalY;
    doc.text(`Subtotal: $${order.subtotal.toFixed(2)}`, 14, finalY + 10);
    doc.text(`Tax: $${order.tax.toFixed(2)}`, 14, finalY + 15);
    doc.text(`Total: $${order.total.toFixed(2)}`, 14, finalY + 20);

    // Add shipping address directly after the total with minimal font size
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Shipping Address:", 14, finalY + 30);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`${order.customer.name}`, 14, finalY + 35);
    doc.text(`${order.customer.address}`, 14, finalY + 40);
    doc.text(`${order.customer.city}`, 14, finalY + 45);
    doc.text(`${order.customer.country}`, 14, finalY + 50);

    // Add a thank you message at the bottom
    doc.setFontSize(10);
    doc.text(
      "Thank you for your purchase!",
      105,
      doc.internal.pageSize.height - 20,
      { align: "center" }
    );
    doc.text(
      "If you have any questions, please contact us at support@tshirtheaven.com.",
      105,
      doc.internal.pageSize.height - 15,
      { align: "center" }
    );

    // Save PDF
    doc.save(`invoice_${order.id}.pdf`);
  };

  return (
    <Button onClick={downloadInvoice} variant={variant}>
      {label || "Download Invoice"}
    </Button>
  );
}
