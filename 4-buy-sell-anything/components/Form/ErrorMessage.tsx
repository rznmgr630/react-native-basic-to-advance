import AppText from "../AppText";

type Props = {
  error?: string;
  touched?: boolean;
};

const ErrorMessage = ({ error, touched }: Props) => {
  if (!error || !touched) return null;
  return <AppText style={{ color: "red", fontSize: 12 }}>{error}</AppText>;
};

export default ErrorMessage;
