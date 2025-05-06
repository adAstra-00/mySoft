// src/lib/dataModel.ts

export type PublishingPlatform = 'kdp' | 'itch' | 'substack' | 'gumroad';

export interface PlatformData {
  published: boolean;
  publishDate?: string;
  url?: string;
  royalties?: number;
  checklist: Record<string, boolean>;
}

export interface WritingProject {
  id: string;
  title: string;
  type: 'novel' | 'short_story' | 'poem';
  tags: string[];
  wordCount: number;
  status: 'draft' | 'editing' | 'formatted' | 'uploaded' | 'published';
  synopsis: string;
  genre: string;
  keywords: string[];
  filePath: string;
  coverImage?: string;
  platforms: Record<PublishingPlatform, PlatformData>;
  notes: string;
}
