"use client";

type Props = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function PageHeading({ title, description, action }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
        {description ? (
          <p className="mt-1 max-w-2xl text-sm text-neutral-500">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
