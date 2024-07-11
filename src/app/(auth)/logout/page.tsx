// Import necessary modules
import { signOut } from "next-auth/react";
import { cloneElement, ReactElement } from "react";

// Define the asynchronous handleSignOut function
export async function handleSignOut() {
  try {
    const result = await signOut();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// Define the props interface for the ServerComponent
interface ServerComponentProps {
  children: (props: { handleSignOut: () => Promise<void> }) => ReactElement;
}

// Define the ServerComponent functional component
const ServerComponent: React.FC<ServerComponentProps> = ({ children }) => {
  return cloneElement(children({ handleSignOut }), {});
};

// Export the ServerComponent as the default export
export default ServerComponent;
