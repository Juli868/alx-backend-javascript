import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classr1 = new ClassRoom(19);
  const classr2 = new ClassRoom(20);
  const classr3 = new ClassRoom(34);
  const result = [classr1, classr2, classr3];
  return (result);
}
