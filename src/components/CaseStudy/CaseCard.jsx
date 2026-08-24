import { HiArrowRight } from "react-icons/hi2";

const CaseCard = ({ caseStudy }) => {
    return (
        <div className="epilogue">
            <div>
                <a
                    href={caseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className=""
                    />
                </a>
            </div>
            <div className="mt-5">
                <a
                    href={caseStudy.link}
                    className="flex items-center gap-3 font-semibold underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    {caseStudy.title} <HiArrowRight className="text-2xl" />
                </a>
                <p className="text-sm mt-1">{caseStudy.type}</p>
            </div>
        </div>
    );
};

export default CaseCard;
