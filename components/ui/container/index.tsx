type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

// Content column from the design: 352px on mobile (25px gutters), 674px on
// tablet (80px gutters) and 1242px on desktop.
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1290px] px-[25px] md:px-20 xl:px-6 ${className}`}>
      {children}
    </div>
  );
}
