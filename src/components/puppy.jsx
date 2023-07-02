export default function Puppy({ id, name }) {
  return (
    <p
      onClick={() => {
        setFeatPupId(id);
      }}
      key={id}
    >
      {name}
    </p>
  );
}
