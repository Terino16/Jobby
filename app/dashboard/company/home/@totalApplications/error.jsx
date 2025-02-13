"use client"
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ErrorCard({ title = "Error", message = "Something went wrong" }) {
  return (
    <div className="w-full border-2 rounded-md  mx-auto  shadow-lg flex flex-col justify-center items-center gap-2">
    <Button>
    <AlertCircle className="" size={16} />
    <Label className="">{title}</Label>
    </Button>
    <Label className="text-muted-foreground">{message}</Label>
    </div>
  );
}