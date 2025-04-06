
export function Button({ children, className }) {
  return (
    <button className={`text-white font-semibold py-2 px-4 rounded-xl shadow ${className}`}>
      {children}
    </button>
  );
}
