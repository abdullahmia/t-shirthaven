import { SITE_NAME } from "@/constants";
import { Container, Heading, Hr, Section, Text } from "@react-email/components";
import { EmailFooter } from "./general/email-footer"; // Assuming you have a reusable footer component

export function OrderConfirmationEmail({ order }) {
  return (
    <Container>
      {/* Header with Company Information */}
      <Section style={{ paddingBottom: "20px", textAlign: "center" }}>
        <Heading as="h2">{SITE_NAME || "T-shirtheaven"}</Heading>
        <Text>12 Street, Block D, New York, California, 150</Text>
        <Text>Phone: (555) 555-5555</Text>
        <Text>
          Email:{" "}
          <a href="mailto:support@tshirtheaven.com">support@tshirtheaven.com</a>
        </Text>
      </Section>

      <Hr />

      {/* Middle: Order Summary Table with Total & Subtotal */}
      <Section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Heading as="h3">Order Summary</Heading>
        <Text>Order ID: {order.id}</Text>
        <Text>Order Date: {order.date}</Text>

        {/* Order Items Table */}
        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Product
              </th>
              <th
                style={{
                  textAlign: "center",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Quantity
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {item.title}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {item.quantity}
                </td>
                <td
                  style={{
                    textAlign: "right",
                    padding: "8px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  ${item.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Subtotal and Total */}
        <Text style={{ marginTop: "20px", textAlign: "right" }}>
          Subtotal: ${order.subtotal.toFixed(2)}
        </Text>
        <Text style={{ textAlign: "right" }}>
          Total: ${order.total.toFixed(2)}
        </Text>
      </Section>

      <Hr />

      {/* Footer: Shipping Information & Thank You Note */}
      <Section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Heading as="h4">Shipping Information</Heading>
        <Text>{order.customer.name}</Text>
        <Text>{order.customer.address}</Text>

        <Text style={{ marginTop: "20px" }}>Thank you for your purchase!</Text>
        <Text>
          If you have any questions, please contact us at support@tshirtheaven .
        </Text>
      </Section>

      <EmailFooter />
    </Container>
  );
}
