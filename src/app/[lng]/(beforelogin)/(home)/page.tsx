import { NebulaLoader, Phase } from '@/shared/ui/components/NebulaLoader';

export default function HomePage() {
  return (
    <section className='flex col h-full w-full'>
      <div className='m-auto'>
        <h1 className='text-white font-bold text-center'>Home Page</h1>
        <NebulaLoader phase={Phase.Intro} />
      </div>
    </section>
  );
}
