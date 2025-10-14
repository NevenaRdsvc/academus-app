export interface NoteModel {
  id: number;
  title: string;
  description: string;
  favourite: boolean;
  color: string;
  idEntranceExam: number;
  idUser: string;
  createdAt: Date | string;
  modifiedAt: Date | string | null;
}
