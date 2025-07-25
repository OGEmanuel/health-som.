import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';

function ButtonParams(props: {
  name: string;
  value: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const initialRenderRef = useRef(true);

  useEffect(() => {
    // Only run this effect on initial render, not on subsequent renders
    if (initialRenderRef.current) {
      initialRenderRef.current = false;

      // We want to check and clear the parameter only on initial render
      // NOT every time the user clicks the button
      const searchParams = new URLSearchParams(location.search);

      // Check if the parameter exists and remove it
      if (searchParams.has(props.name)) {
        searchParams.delete(props.name);

        navigate(
          {
            pathname: location.pathname,
            search: searchParams.toString(),
          },
          { replace: true },
        );
      }
    }
  }, [props.name, location.pathname, navigate]);

  // Function to add parameter only if it doesn't exist
  const addParameterIfNotExists = () => {
    const searchParams = new URLSearchParams(location.search);

    // Parameter doesn't exist, so add it
    searchParams.set(props.name, props.value);

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  return <button onClick={addParameterIfNotExists}>{props.children}</button>;
}

export default ButtonParams;
