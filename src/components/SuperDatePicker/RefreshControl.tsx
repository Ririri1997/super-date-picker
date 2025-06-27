

interface RefreshControlProps {
  onRefresh: () => void;
}

function RefreshControl({ onRefresh }: RefreshControlProps ) {
  return (

    <button onClick={onRefresh}>Reset</button>
  );
}

export default RefreshControl;
