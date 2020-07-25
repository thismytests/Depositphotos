export interface ComponentProps {
  onSubmit: (params: FormData) => Promise<void>;
  errorCode: string;
}

export interface FormData {
  availableBills: string,
}

