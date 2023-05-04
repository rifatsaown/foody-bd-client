import { createRef } from "react";
import ReactToPdf from "react-to-pdf";


const Blog = () => {
    const ref = createRef();
  return (
    

<div>
    <div ref={ref}>
      <div className="hero h-[45vh] bg-orange-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Some Ques</h1>
          </div>
        </div>
      </div>
      <div className="py-8 bg-orange-100">
        <div className="collapse bg-orange-50 w-8/12 mx-auto rounded-xl my-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  text-primary-content ">
            Tell us the differences between uncontrolled and controlled
            components.
          </div>
          <div className="collapse-content ">
            <p>
              Uncontrolled components manage their own state internally, while
              controlled components rely on an external state management system.
              Controlled components are more flexible but harder to implement,
              while uncontrolled components are simpler but less flexible. The
              choice between using controlled or uncontrolled components depends
              on the specific requirements and complexity of the UI.
            </p>
          </div>
        </div>
        <div className="collapse bg-orange-50 w-8/12 mx-auto rounded-xl my-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  text-primary-content ">
            How to validate React props using PropTypes
          </div>
          <div className="collapse-content ">
            <p>
              PropTypes is a built-in library in React that allows you to
              validate the types of props passed to a component. You can define
              the expected types and validation rules in a propTypes object and
              React will automatically validate them. This helps catch errors
              early and ensures that components receive the correct props.
            </p>
          </div>
        </div>
        <div className="collapse bg-orange-50 w-8/12 mx-auto rounded-xl my-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  text-primary-content ">
            Tell us the difference between nodejs and express js.
          </div>
          <div className="collapse-content ">
            <p>
              Node.js is a JavaScript runtime for building server-side
              applications, while Express.js is a web application framework
              built on top of Node.js for building web applications.
            </p>
          </div>
        </div>
        <div className="collapse bg-orange-50 w-8/12 mx-auto rounded-xl my-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  text-primary-content ">
            What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content ">
            <p>
              A custom hook is a reusable function in React that encapsulates
              complex logic or behavior for sharing across multiple components,
              to simplify your code, reduce duplication and make your codebase
              more maintainable.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center my-12">
    <ReactToPdf targetRef={ref} filename="Blog-pdf.pdf">
        {({toPdf}) => (
            <button className="btn btn-primary" onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    </div>
</div>
    
  );
};

export default Blog;
