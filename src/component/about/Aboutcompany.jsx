import Form from "./form";
import { aboutContent } from "../../data/about/aboutData"; // Update the path as needed

export default function Aboutcompany() {
  return (
    <div className="lg:h-screen h-full p-4  ">
      <div className="container mx-auto grid bg-gray-100 mt-10 rounded-lg lg:h-[90vh] p-4 gap-4 lg:gap-0 lg:grid-cols-2 w-full items-center justify-center">
      <div className="lg:w-[52vw] w-full p-4 px-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">
          {aboutContent.title}
        </h2>
        <h3 className="text-black">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <div key={index}>
              {paragraph.includes("Mission:") && (
                <strong className="text-blue-600 underline-offset-2">
                  {paragraph.split(":")[0]}:
                </strong>
              )}
              {paragraph.includes("Vision:") && (
                <strong className="text-blue-600 underline-offset-2">
                  {paragraph.split(":")[0]}:
                </strong>
              )}
              {paragraph.includes("Values:") && (
                <strong className="text-blue-600 underline-offset-2">
                  {paragraph.split(":")[0]}:
                </strong>
              )}
              {!paragraph.includes("Mission:") &&
              !paragraph.includes("Vision:") &&
              !paragraph.includes("Values:") ? (
                paragraph
              ) : (
                <span>{paragraph.split(":")[1]}</span>
              )}
              <br />
            </div>
          ))}
        </h3>
      </div>
      <div className="w-full max-w-2xl lg:max-w-lg lg:ml-auto px-4">
        <Form />
      </div>
    </div>
    </div>
  );
}
