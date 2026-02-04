"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BugReportFormProps = {
  onCancel: () => void;
};

/* ---------------- schema ---------------- */
const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  screenshot: z.any().optional(), // ✅ file handled safely
});

/* ---------------- component ---------------- */
export function BugReportForm({onCancel}) {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      screenshot: null as File | null,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success("Feedback submitted successfully", {
        description: (
          <pre className="mt-2 rounded-md bg-muted p-3 text-xs">
            {JSON.stringify(
              {
                title: value.title,
                description: value.description,
                screenshot: value.screenshot?.name ?? "No image",
              },
              null,
              2
            )}
          </pre>
        ),
      });
    },
  });

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
        <CardDescription>
          Share your feedback or report an issue.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="feedback-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <FieldGroup>
            {/* -------- Title -------- */}
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>Title</FieldLabel>
                    <Input
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Bug title"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* -------- Description -------- */}
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel>Description</FieldLabel>
                    <Textarea
                      rows={5}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Describe the issue in detail"
                      className="resize-none"
                    />
                    <p className="text-right text-xs text-muted-foreground">
                      {field.state.value.length}/100
                    </p>
                    <FieldDescription>
                      Include steps, expected behavior, and actual result.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>

          {/* -------- Bug Image Upload -------- */}
          <form.Field
            name="screenshot"
            children={(field) => (
              <Field>
                <FieldLabel>Bug Image (optional)</FieldLabel>

                <Input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    if (file.size > 2 * 1024 * 1024) {
                      toast.error("Bug image size must be under 2MB");
                      return;
                    }

                    field.handleChange(file);
                  }}
                />

                {field.state.value instanceof File && (
                  <img
                    src={URL.createObjectURL(field.state.value)}
                    alt="Bug image preview"
                    className="mt-2 h-32 rounded-md border object-cover"
                  />
                )}

                <FieldDescription>
                  Upload a bug image (PNG / JPG, max 2MB).
                </FieldDescription>
              </Field>
            )}
          />
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
  <Button
    type="button"
    variant="outline"
    onClick={onCancel} // ✅ modal close
  >
    Cancel
  </Button>

  <Button
    type="button"
    variant="ghost"
    onClick={() => form.reset()}
  >
    Reset
  </Button>

  <Button type="submit" form="feedback-form">
    Submit
  </Button>
</CardFooter>

    </Card>
  );
}


// // app/features/feedback/components/form.tsx

// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ImageIcon, UploadIcon, XIcon, Loader2 } from "lucide-react";
// import { useFileUpload } from "@/hooks/use-file-upload";
// import { toast } from "sonner";
// import { useNavigate, useParams } from "react-router-dom";

// // import {
// //   useCreateFeedbackMutation,
// //   useUpdateFeedbackMutation,
// //   useGetFeedbackByIdQuery,
// // } from "../data/feedbackApi";

// import { useGetCategoriesQuery } from "~/features/category/data/categoryApi";
// import { RichTextEditor } from "~/components/crud/RichTextEditor";
// import { Combobox } from "@/components/crud/Combobox";

// // ------------------ VALIDATION ------------------
// const validate = (values: any) => {
//   const errors: Record<string, string> = {};

//   // Title
//   if (!values.title.trim()) {
//     errors.title = "Title is required.";
//   } else if (values.title.trim().length < 3) {
//     errors.title = "Title must be at least 3 characters.";
//   } else if (values.title.trim().length > 150) {
//     errors.title = "Title cannot exceed 150 characters.";
//   }

//   // Short Description
//   if (!values.short_description.trim()) {
//     errors.short_description = "Short description is required.";
//   } else if (values.short_description.trim().length > 300) {
//     errors.short_description =
//       "Short description cannot exceed 300 characters.";
//   }

//   // Description
//   if (!values.description.trim()) {
//     errors.description = "Description is required.";
//   }

//   // Category (optional, but if exists, must be valid)
//   if (values.category && typeof values.category !== "string") {
//     errors.category = "Invalid category selected.";
//   }

//   return errors;
// };

// export default function FeedbackForm({
//   mode = "create",
// }: {
//   mode?: "create" | "edit";
// }) {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEdit = mode === "edit" || !!id;

//   // ------------------ QUERIES ------------------
//   // const { data: FeedbackData, isLoading: loadingFeedback } = useGetFeedbackByIdQuery(id!, {
//   //   skip: !isEdit,
//   // });

//   const { data: categoryData } = useGetCategoriesQuery({ page: 1, limit: 100 });

//   // const [createFeedback] = useCreateFeedbackMutation();
//   // const [updateFeedback] = useUpdateFeedbackMutation();
//   const SHORT_DESC_LIMIT = 300;

//   // ------------------ FORM STATE ------------------
//   const [values, setValues] = useState({
//     title: "",
//     category: "",
//     short_description: "",
//     description: "",
//     thumbnail: null as string | null,
//     gallery_images: [] as string[],
//     seo: {
//       metaTitle: "",
//       metaDescription: "",
//       metaKeywords: "",
//     },
//     isActive: true,
//     isFeature: false,
//   });

//   const [removedImages, setRemovedImages] = useState<string[]>([]);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // ------------------ FILE UPLOAD HOOKS ------------------
//   const [
//     { files: thumbFiles, isDragging: thumbDrag, errors: thumbErrors },
//     thumbHandlers,
//   ] = useFileUpload({ accept: "image/*", maxSize: 5 * 1024 * 1024 });

//   const [
//     { files: galleryFiles, isDragging: galleryDrag, errors: galleryErrors },
//     galleryHandlers,
//   ] = useFileUpload({
//     accept: "image/*",
//     multiple: true,
//     maxSize: 5 * 1024 * 1024,
//   });

//   const thumbPreview = thumbFiles[0]?.preview || values.thumbnail || null;

//   const galleryPreviews = [
//     ...(values.gallery_images || []),
//     ...galleryFiles.map((f) => f.preview),
//   ];

//   // ------------------ PREFILL FORM ON EDIT ------------------
//   // useEffect(() => {
//   //   if (!blogData?.data) return;

//   //   const b = blogData.data;

//   //   setValues({
//   //     title: b.title || "",
//   //     category:
//   //       b.category && typeof b.category === "object"
//   //         ? (b.category as any)._id
//   //         : b.category || "",
//   //     short_description: b.short_description || "",
//   //     description: b.description || "",
//   //     thumbnail: b.thumbnail || null,
//   //     gallery_images: b.gallery_images || [],
//   //     seo: {
//   //       metaTitle: b.seo?.metaTitle || "",
//   //       metaDescription: b.seo?.metaDescription || "",
//   //       metaKeywords: Array.isArray(b.seo?.metaKeywords)
//   //         ? b.seo.metaKeywords.join(", ")
//   //         : b.seo?.metaKeywords || "",
//   //     },
//   //     isActive: b.isActive ?? true,
//   //     isFeature: b.isFeature ?? false,
//   //   });

//   //   thumbHandlers.clearFiles();
//   //   galleryHandlers.clearFiles();
//   // }, [blogData]);

//   // ------------------ CHANGE HANDLER ------------------
//   const handleChange = (name: string, value: any) => {
//     setValues((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
//   };

//   // ------------------ REMOVE GALLERY IMAGE ------------------
//   const handleRemoveGalleryImage = (src: string) => {
//     if (values.gallery_images.includes(src)) {
//       setRemovedImages((prev) => [...prev, src]);
//       setValues((prev) => ({
//         ...prev,
//         gallery_images: prev.gallery_images.filter((img) => img !== src),
//       }));
//     } else {
//       const file = galleryFiles.find((f) => f.preview === src);
//       if (file) galleryHandlers.removeFile(file.id);
//     }
//   };

//   // ------------------ SUBMIT HANDLER ------------------
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const newErrors = validate(values);
//     if (Object.keys(newErrors).length > 0) {
//       Object.values(newErrors).forEach((msg) => toast.error(msg));
//       return setErrors(newErrors);
//     }

//     setIsSubmitting(true);

//     try {
//       const formData = new FormData();

//       // Basic Fields
//       formData.append("title", values.title);
//       formData.append("short_description", values.short_description);
//       formData.append("description", values.description);
//       formData.append("isActive", String(values.isActive));
//       formData.append("isFeature", String(values.isFeature));
//       if (values.category) formData.append("category", values.category);

//       // SEO
//       formData.append("seo[metaTitle]", values.seo.metaTitle);
//       formData.append("seo[metaDescription]", values.seo.metaDescription);
//       const keywordsArr = values.seo.metaKeywords
//         .split(",")
//         .map((k) => k.trim())
//         .filter(Boolean);
//       formData.append("seo[metaKeywords]", JSON.stringify(keywordsArr));

//       // Thumbnail
//       if (thumbFiles.length > 0) {
//         formData.append("thumbnail", thumbFiles[0].file as Blob);
//       }

//       // Gallery → Keep + Remove + Add new
//       formData.append("keep_gallery", JSON.stringify(values.gallery_images));
//       formData.append("remove_gallery", JSON.stringify(removedImages));

//       galleryFiles.forEach((f) =>
//         formData.append("gallery_images", f.file as Blob),
//       );

//       //  if (isEdit) {
//       //    await updateFeedback({ id: id!, formData }).unwrap();
//       //    toast.success("Feedback updated successfully!");
//       //  } else {
//       //    await createFeedback(formData).unwrap();
//       //    toast.success("Feedback created successfully!");
//       // }

//       //     navigate("/admin/Feedback");
//     } catch (err: any) {
//       toast.error(err?.data?.message || "Something went wrong.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // // ------------------ UI ------------------
//   // if (loadingBlog && isEdit) {
//   //   return (
//   //     <div className="flex justify-center py-20">
//   //       <Loader2 className="h-6 w-6 animate-spin" />
//   //     </div>
//   //   );
//   // }

//   const categoryOptions =
//     categoryData?.data?.map((cat: any) => ({
//       value: cat._id,
//       label: cat.name,
//     })) || [];

//   return (
//     <div className="p-6 space-y-8">
//       <header>
//         <h1 className="text-3xl font-semibold">
//           {isEdit ? "Edit Feedback" : "Feedback"}
//         </h1>
//       </header>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* LEFT SIDE */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* MAIN INFORMATION */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Main Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {/* Title */}
//                 <div>
//                   <Label className="mb-2">Title</Label>
//                   <Input
//                     value={values.title}
//                     onChange={(e) => handleChange("title", e.target.value)}
//                     className={errors.title ? "border-red-500" : ""}
//                   />
//                   {errors.title && (
//                     <p className="text-xs text-red-500">{errors.title}</p>
//                   )}
//                 </div>

//                 {/* Category */}
//                 <div>
//                   <Label className="mb-2">Category</Label>
//                   <Combobox
//                     options={categoryOptions}
//                     value={values.category}
//                     onChange={(v) => handleChange("category", v)}
//                   />
//                 </div>

//                 {/* SHORT DESCRIPTION */}
//                 <div>
//                   <Label className="mb-2">Summary</Label>
//                   <Textarea
//                     value={values.short_description}
//                     onChange={(e) =>
//                       handleChange("short_description", e.target.value)
//                     }
//                     className={`resize-none ${
//                       values.short_description.length > SHORT_DESC_LIMIT
//                         ? "border-red-500 focus-visible:ring-red-500"
//                         : ""
//                     }`}
//                   />

//                   <div className="flex justify-between mt-1">
//                     {values.short_description.length > SHORT_DESC_LIMIT ? (
//                       <p className="text-xs text-red-500">
//                         Short description must be under {SHORT_DESC_LIMIT}{" "}
//                         characters
//                       </p>
//                     ) : (
//                       <span className="text-xs text-muted-foreground">
//                         {values.short_description.length}/{SHORT_DESC_LIMIT}{" "}
//                         characters
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Description */}

//                  <div>
//                   <Label className="mb-2">Description</Label>
//                   <Textarea
//                     value={values.short_description}
//                     onChange={(e) =>
//                       handleChange("short_description", e.target.value)
//                     }
//                     className={`resize-none ${
//                       values.short_description.length > SHORT_DESC_LIMIT
//                         ? "border-red-500 focus-visible:ring-red-500"
//                         : ""
//                     }`}
//                   />

//                   <div className="flex justify-between mt-1">
//                     {values.short_description.length > SHORT_DESC_LIMIT ? (
//                       <p className="text-xs text-red-500">
//                         Short description must be under {SHORT_DESC_LIMIT}{"1000 "}
//                         characters
//                       </p>
//                     ) : (
//                       <span className="text-xs text-muted-foreground">
//                         {values.short_description.length}/{SHORT_DESC_LIMIT}{" "}
//                         characters
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Image</CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-3">
//                 <div
//                   className={`border-2 border-dashed p-6 rounded-xl text-center ${
//                     thumbDrag ? "border-primary bg-accent" : ""
//                   }`}
//                   onDragEnter={thumbHandlers.handleDragEnter}
//                   onDragLeave={thumbHandlers.handleDragLeave}
//                   onDragOver={thumbHandlers.handleDragOver}
//                   onDrop={thumbHandlers.handleDrop}
//                 >
//                   <input
//                     {...thumbHandlers.getInputProps()}
//                     className="sr-only"
//                   />

//                   {thumbPreview ? (
//                     <img
//                       src={thumbPreview}
//                       className="h-40 mx-auto object-cover rounded"
//                     />
//                   ) : (
//                     <>
//                       <ImageIcon className="h-6 w-6 mx-auto opacity-70" />
//                       <p className="text-sm mt-2">Upload image</p>

//                       <Button
//                         type="button"
//                         variant="outline"
//                         className="mt-2"
//                         onClick={thumbHandlers.openFileDialog}
//                       >
//                         <UploadIcon className="h-4 w-4 mr-2" />
//                         Select Image
//                       </Button>
//                     </>
//                   )}
//                 </div>

//                 {thumbErrors[0] && (
//                   <p className="text-xs text-red-500">{thumbErrors[0]}</p>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6">
//             {/* Status */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Status</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex justify-between p-3 border rounded">
//                   Active
//                   <Switch
//                     checked={values.isActive}
//                     onCheckedChange={(v) => handleChange("isActive", v)}
//                   />
//                 </div>

//                 <div className="flex justify-between p-3 border rounded">
//                   Featured
//                   <Switch
//                     checked={values.isFeature}
//                     onCheckedChange={(v) => handleChange("isFeature", v)}
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="pt-6 flex gap-3">
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
//             {isEdit ? "Save Changes" : "Create"}
//           </Button>

//           <Button
//             type="button"
//             variant="outline"
//             onClick={() => navigate("/admin/feedback")}
//           >
//             Cancel
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
