export class CameraDto {
  id: number;
  title: string;
  url: string;
  status: string;
  thumbnailUrl: string;

  constructor(d: any) {
    this.id = d.id;
    this.title = d.title;
    this.url = d.url;
    this.status = d.status;
    this.thumbnailUrl = d.thumbnailUrl;
  }
}
