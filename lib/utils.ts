import { Prisma } from "@prisma/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function convertToPlainObject<T>(value: T): T {
  if (value === undefined || value === null) {
    throw new Error("Cannot convert undefined or null to plain object.");
  }
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}
export function formatError(error: unknown) {
  if (error instanceof ZodError) {

    return error.errors.map((e) => e.message).join(". ");
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
    const field = Array.isArray(error.meta?.target) ? error.meta.target[0] : "Field";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return JSON.stringify(error);
}
export function round2(value: number | string) {
  if (typeof value === 'number') {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  } else if (typeof value === 'string') {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  } else {
    throw new Error('Value is not a number or string');
  }
}