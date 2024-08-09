"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { deleteCategoryAction } from "../action";

export default function DeleteCategoryModal({ id }) {
  // Local state
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * HANDLERS
   */
  const deleteHandler = async () => {
    setLoading(true);
    try {
      await deleteCategoryAction(id);
      toast.success("Category deleted successfully");
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error?.message);
      toast.error(error.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-2 px-2">
        <Trash size={17} />
        Detete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            category.
          </DialogDescription>
          <div>
            <div className="flex items-center justify-center py-10">
              <Image
                src="/assets/icons/alert-danger.png"
                width={100}
                height={100}
                alt="Danger alert"
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                variant="danger"
                loading={loading}
                onClick={deleteHandler}
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
