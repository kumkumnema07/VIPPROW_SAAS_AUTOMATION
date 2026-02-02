// app/features/blog/components/blog-multi-delete-dialog.tsx

"use client";

import type { Table } from "@tanstack/react-table"; // ✅ type-only import
import { MultiDeleteDialog } from "@/components/crud/MultiDeleteDialog";
import { useDeleteFeedbackMutation } from "../data/feedbackApi"; // ✅ use Feedback mutation

type FeedbackMultiDeleteDialogProps<TData> = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  table: Table<TData>;
};

export function FeedbackMultiDeleteDialog<TData>({
  open,
  onOpenChange,
  table,
}: FeedbackMultiDeleteDialogProps<TData>) {
  const [deleteFeedback] = useDeleteFeedbackMutation();

  return (
    <MultiDeleteDialog
      open={open}
      onOpenChange={onOpenChange}
      table={table}
      entityName="feedback"
      deleteFn={(slug) => deleteFeedback(slug).unwrap()} // ✅ uses slug (blogs delete by slug)
    />
  );
}
