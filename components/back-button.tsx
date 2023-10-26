'use client'

import React from 'react';
import { ArrowLeft } from 'lucide-react'; // Importe o ícone de seta para a esquerda
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const BackButton: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className='mb-4'>
      <Button variant={'ghost'} onClick={goBack} className="cursor-pointer">
        <ArrowLeft size={24} />
      </Button>
    </div>
  );
};

export default BackButton;
