import { Button } from "./Button";

export const ButtonStories = () => (
  <div className="space-y-10">
    <Button>Button</Button>

    <div className="flex space-x-4">
      <Button cta>Buy Now</Button>
      <Button>Learn More</Button>
    </div>
  </div>
);
