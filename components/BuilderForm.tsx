'use client';

type BuilderFormProps = {
  values: {
    name: string;
    role: string;
    stack: string;
    location: string;
    xHandle: string;
    github: string;
  };
  onChange: (field: string, value: string) => void;
};

const fields = [
  { key: 'name', label: 'Name', placeholder: 'PRINCE SINGH' },
  { key: 'role', label: 'Stack / Role', placeholder: 'Full Stack Developer' },
  { key: 'stack', label: 'Builder Title', placeholder: 'AI Whisperer' },
  { key: 'location', label: 'Location (optional)', placeholder: 'Ahmedabad, India' },
  { key: 'xHandle', label: 'X Handle (optional)', placeholder: '@frameinha' },
  { key: 'github', label: 'GitHub (optional)', placeholder: 'github.com/username' },
] as const;

export default function BuilderForm({ values, onChange }: BuilderFormProps) {
  return (
    <div className="rounded-[30px] border border-[#f6e8c8]/10 bg-[#041b13]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#ffd83d]">Builder Profile</p>
          <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-[#f6e8c8]">Your pass details</h3>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#f6e8c8]/65">{field.label}</span>
            <input
              value={values[field.key as keyof typeof values]}
              onChange={(event) => onChange(field.key, event.target.value)}
              placeholder={field.placeholder}
              className="rounded-2xl border border-[#f6e8c8]/15 bg-[#05261d] px-4 py-3 text-sm text-[#f6e8c8] outline-none ring-0 transition focus:border-[#37E6D5]"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
