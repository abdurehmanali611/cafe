/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ImageIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

import { PhoneInput } from "@/components/phone-input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export enum formFieldTypes {
  INPUT = "input",
  CALENDAR = "calendar",
  RADIO_BUTTON = "radioButton",
  SELECT = "select",
  TEXTAREA = "textarea",
  IMAGE_UPLOADER = "imageUploader",
  SKELETON = "skeleton",
  ALERTDIALOG = "alertDialog",
  SWITCH = "switch",
  PHONE_INPUT = "phoneInput",
}

type SelectOption = {
  label: string;
  value: string;
  description?: string;
};

type BaseProps<T extends FieldValues> = {
  control?: Control<T>;
  name?: FieldPath<T>;
  fieldType: formFieldTypes;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: string;
  disabled?: boolean;
  options?: SelectOption[];
  className?: string; // Prop enabled for custom styling
  accept?: string;
  renderSkeleton?: (field: {
    value: unknown;
    onChange: (value: unknown) => void;
  }) => React.ReactNode;
  dialogTitle?: string;
  dialogDescription?: string;
  dialogTriggerLabel?: string;
  dialogActionLabel?: string;
  dialogCancelLabel?: string;
  onAlertAction?: () => void;
};

type ControlledProps<T extends FieldValues> = BaseProps<T> & {
  control: Control<T>;
  name: FieldPath<T>;
};

type AlertDialogProps<T extends FieldValues> = BaseProps<T> & {
  fieldType: formFieldTypes.ALERTDIALOG;
  dialogTitle: string;
  dialogDescription: string;
};

type CustomFormFieldProps<T extends FieldValues> =
  | ControlledProps<T>
  | AlertDialogProps<T>;

const CustomFormField = <T extends FieldValues>(props: CustomFormFieldProps<T>) => {
  if (props.fieldType === formFieldTypes.ALERTDIALOG) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button type="button" variant="outline">
            {props.dialogTriggerLabel ?? "Open Dialog"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{props.dialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>{props.dialogDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{props.dialogCancelLabel ?? "Cancel"}</AlertDialogCancel>
            <AlertDialogAction onClick={props.onAlertAction}>
              {props.dialogActionLabel ?? "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  const {
    control,
    name,
    fieldType,
    label,
    placeholder,
    description,
    type = "text",
    disabled,
    options = [],
    className,
    accept,
    renderSkeleton,
  } = props as ControlledProps<T>;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const hasError = Boolean(fieldState.error);
        const dateValue =
          (field.value as any) instanceof Date
            ? field.value
            : typeof field.value === "string" && field.value
              ? new Date(field.value)
              : undefined;

        return (
          <Field className={className} data-invalid={hasError || undefined}>
            {label ? <FieldLabel htmlFor={String(name)}>{label}</FieldLabel> : null}
            <FieldContent>
              {fieldType === formFieldTypes.INPUT ? (
                <Input
                  id={String(name)}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  aria-invalid={hasError}
                  value={(field.value as string) ?? ""}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  name={field.name}
                  className={className}
                />
              ) : null}

              {fieldType === formFieldTypes.TEXTAREA ? (
                <Textarea
                  id={String(name)}
                  placeholder={placeholder}
                  disabled={disabled}
                  aria-invalid={hasError}
                  value={(field.value as string) ?? ""}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  name={field.name}
                  className={className}
                />
              ) : null}

              {fieldType === formFieldTypes.SELECT ? (
                <Select
                  value={(field.value as string) ?? ""}
                  onValueChange={field.onChange}
                  disabled={disabled}
                >
                  <SelectTrigger id={String(name)} className={className} aria-invalid={hasError}>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : null}

              {fieldType === formFieldTypes.PHONE_INPUT ? (
                <PhoneInput
                  id={String(name)}
                  placeholder={placeholder}
                  disabled={disabled}
                  aria-invalid={hasError}
                  defaultCountry="ET"
                  international
                  value={(field.value as string) ?? ""}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  name={field.name}
                  className={className}
                />
              ) : null}

              {fieldType === formFieldTypes.CALENDAR ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={className}
                    >
                      <span className={dateValue ? "text-foreground" : "text-muted-foreground"}>
                        {dateValue ? format(dateValue, "PPP") : placeholder ?? "Pick a date"}
                      </span>
                      <HugeiconsIcon icon={CalendarIcon} strokeWidth={2} className="size-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dateValue}
                      onSelect={(date) => field.onChange(date ?? null)}
                    />
                  </PopoverContent>
                </Popover>
              ) : null}

              {fieldType === formFieldTypes.RADIO_BUTTON ? (
                <RadioGroup
                  value={(field.value as string) ?? ""}
                  onValueChange={field.onChange}
                  className="gap-3"
                >
                  {options.map((option) => (
                    <Field
                      key={option.value}
                      orientation="horizontal"
                      className="rounded-2xl border border-white/10 bg-white/6 p-4"
                    >
                      <RadioGroupItem id={`${String(name)}-${option.value}`} value={option.value} />
                      <FieldContent className="gap-1">
                        <FieldLabel
                          htmlFor={`${String(name)}-${option.value}`}
                          className="font-normal text-stone-100"
                        >
                          {option.label}
                        </FieldLabel>
                        {option.description ? (
                          <FieldDescription>{option.description}</FieldDescription>
                        ) : null}
                      </FieldContent>
                    </Field>
                  ))}
                </RadioGroup>
              ) : null}

              {fieldType === formFieldTypes.SWITCH ? (
                <Field orientation="horizontal" className="justify-between rounded-2xl border border-white/10 bg-white/6 p-4">
                  <FieldContent className="gap-1">
                    <FieldLabel htmlFor={String(name)} className="font-normal text-stone-100">
                      {label}
                    </FieldLabel>
                    {description ? <FieldDescription>{description}</FieldDescription> : null}
                  </FieldContent>
                  <Switch
                    id={String(name)}
                    checked={Boolean(field.value)}
                    onCheckedChange={field.onChange}
                    disabled={disabled}
                  />
                </Field>
              ) : null}

              {fieldType === formFieldTypes.IMAGE_UPLOADER ? (
                <div className="rounded-2xl border border-dashed border-white/15 bg-white/6 p-4">
                  <label
                    htmlFor={String(name)}
                    className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center"
                  >
                    <HugeiconsIcon icon={ImageIcon} strokeWidth={2} className="size-8 text-amber-300" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-stone-100">
                        {placeholder ?? "Upload an image"}
                      </p>
                      <p className="text-xs text-stone-400">
                        PNG, JPG, or WebP supported
                      </p>
                    </div>
                  </label>
                  <Input
                    id={String(name)}
                    type="file"
                    accept={accept ?? "image/*"}
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null;
                      field.onChange(file);
                    }}
                  />
                  {field.value && typeof field.value === "object" && "name" in (field.value as object) ? (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-stone-300">
                      Selected: {(field.value as any).name}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {fieldType === formFieldTypes.SKELETON && renderSkeleton ? (
                <div>{renderSkeleton({ value: field.value, onChange: field.onChange })}</div>
              ) : null}

              {description && fieldType !== formFieldTypes.SWITCH ? (
                <FieldDescription>{description}</FieldDescription>
              ) : null}
              <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
            </FieldContent>
          </Field>
        );
      }}
    />
  );
};

export default CustomFormField;