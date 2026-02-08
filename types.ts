
export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface PromptExample {
  title: string;
  prompt: string;
  category: string;
}

export interface ResourceItem {
  name: string;
  type: 'PDF' | 'DOCX' | 'PPTX' | 'LINK';
  description: string;
}
