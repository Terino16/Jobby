import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert";
  
  interface Props {
    variant: "default" | "destructive";
    title: string;
    description: string;
    Icon: React.ElementType; // ✅ Use ElementType for React components
  }
  
  export const AlertPopup = ({ variant, title, description, Icon }: Props) => {
    return (
      <Alert variant={variant}>
        <Icon className="h-4 w-4" /> {/* ✅ Correct way to render an icon */}
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    );
  };
  