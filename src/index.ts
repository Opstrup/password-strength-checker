interface Result {
  score: number;
  valid: boolean;
}

const passwordCheckRules: RegExp[] = [/[a-z]/g, /[0-9]/g, /[A-Z]/g];

export const PasswordStrengthChecker = (password: string): Result => {
  const defaultResult: Result = {
    score: 0,
    valid: false,
  };
  const result: Result = passwordCheckRules.reduce((acc, rule) => {
    if (rule.test(password)) {
      return { score: acc.score + 1, valid: false };
    }
    return acc;
  }, defaultResult);

  return result;
};
