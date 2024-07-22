import Header from './header';
import Content from './content';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import '../../components/ScrollToTopButton/ScrollToTopButton.css';
import React, { useRef } from 'react';

function Main() {
  const projectRef = useRef('project');
  const eyeRef = useRef('eye');
  const demonstrationRef = useRef('demonstration');
  const advantagesRef = useRef('advantages');

  const scrollToSection = (section) => {
    if (section === 'project') {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'eye') {
      eyeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'demonstration') {
      demonstrationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'advantages') {
      advantagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <Header scrollToSection={scrollToSection}></Header>
      <Content projectRef={projectRef} eyeRef={eyeRef} demonstrationRef={demonstrationRef} advantagesRef={advantagesRef}></Content>
      <ScrollToTopButton />
    </div>
  );
}

export default Main;
