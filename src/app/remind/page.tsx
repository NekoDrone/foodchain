import { ReminderForm } from "@/components/ReminderInput/ReminderForm";

const RemindMePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      <div>
        <p className="pb-2 text-2xl">Enter your phone number:</p>
        <ReminderForm />
      </div>
    </div>
  );
};

export default RemindMePage;
