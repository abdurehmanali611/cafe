import EventItems from "./EventItems";

const EventGrid = ({ preview = false }: { preview?: boolean }) => {
  return (
    <div>
      <EventItems preview={preview} />
    </div>
  );
};

export default EventGrid;
