export interface ComponentProps {
  onSubmit: (params: FormData) => Promise<void>;
  errorCode: string;
}

export interface FormData {
  inputField: string,
  outputField: string
}

