import { NebulaLoader, Phase } from '@/shared/ui/components/NebulaLoader';

export default function DiagnosisIntroPage({
  params,
}: {
  params: { lng: string };
}) {
  return (
    <section className='flex col h-full w-full'>
      <div className='m-auto'>
        <h1 className='text-white font-bold text-center'>Home Page</h1>
        <NebulaLoader phase={Phase.Diagnosis} />
      </div>
    </section>
  );
}
