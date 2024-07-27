import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./AddFAQsComponent.css";

const AddFAQsComponent = ({ onAddFAQs }) => {
    const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

    const handleChange = (index, event) => {
        const values = [...faqs];
        values[index][event.target.name] = event.target.value;
        setFaqs(values);
    };

    const handleAdd = () => {
        setFaqs([...faqs, { question: "", answer: "" }]);
    };

    const handleRemove = (index) => {
        const values = [...faqs];
        values.splice(index, 1);
        setFaqs(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddFAQs(faqs);
        toast.success("FAQs Added Successfully");
    };

    return (
        <div>
            <form className="faq-form" onSubmit={handleSubmit}>
                <h2>Add FAQs</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-input-group">
                        <input
                            type="text"
                            name="question"
                            placeholder="Question"
                            value={faq.question}
                            onChange={(event) => handleChange(index, event)}
                        />
                        <input
                            type="text"
                            name="answer"
                            placeholder="Answer"
                            value={faq.answer}
                            onChange={(event) => handleChange(index, event)}
                        />
                        <button type="button" onClick={() => handleRemove(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <div className="faq-form-buttons">
                    <button type="button" className="add-more" onClick={handleAdd}>
                        Add More
                    </button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddFAQsComponent;
