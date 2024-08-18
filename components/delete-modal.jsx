"use client";

import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function DeleteModal({
  onDelete,
  key = "item",
  title = "",
  description = "",
}) {
  // Local state
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * HANDLERS
   */
  const deleteHandler = async () => {
    setLoading(true);
    try {
      await onDelete();
      toast.success(`${key} deleted successfully`);
      setLoading(false);
      setOpen(false);
    } catch (error) {
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
          <DialogTitle>{title || `Are you absolutely sure?`}</DialogTitle>
          <DialogDescription>
            {description ||
              `This action cannot be undone. This will permanently delete the ${key}.`}
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
