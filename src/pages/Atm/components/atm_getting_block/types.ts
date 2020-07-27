export interface ComponentProps {
  onSubmit: (params: FormData) => Promise<void>;
  errorName: boolean | string;
}

export interface FormData {
  inputField: string,
  outputField: string
}

