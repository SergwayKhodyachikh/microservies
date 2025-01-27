import { MediaUpdatedEvent, Publisher, Subjects } from "@media-premade/ms-common";

export class MediaUpdatedPublisher extends Publisher<MediaUpdatedEvent> {
  readonly subject = Subjects.MEDIA_UPDATED;
}
