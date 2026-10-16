type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

// 1242px content column from the design, with a side gutter on smaller screens.
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1290px] px-6 md:px-10 xl:px-6 ${className}`}>
      {children}
    </div>
  );
}
