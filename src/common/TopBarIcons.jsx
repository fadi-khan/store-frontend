/**
 * TopbarIcons Component
 *
 * A reusable UI component that renders an icon (such as a flag or image)
 * inside a styled container. Accepts a custom class name for additional styling.
 *
 * @component
 * @example
 * // Example usage with a flag image
 * <TopbarIcons
 *   icon={<img src="/svgs/pk.svg" alt="pk" className="h-8 w-8 rounded-full object-cover" />}
 *   customClass="bg-gray-100"
 * />
 *
 * @param {Object} props - Component props
 * @param {JSX.Element} props.icon - The icon element to render (e.g., an <img />, SVG, or React icon).
 * @param {string} [props.customClass] - Optional Tailwind class string to apply custom styles to the wrapper.
 *
 * @returns {JSX.Element} Rendered TopbarIcons component
 */

import PropTypes from "prop-types";

export const TopbarIcons = ({ icon, customClass }) => {
    return (
        <div className={`p-2 cursor-pointer ${customClass}`}>
            {icon}
        </div>
    );
};

TopbarIcons.propTypes = {
    icon: PropTypes.element.isRequired,
    customClass: PropTypes.string,
};

TopbarIcons.defaultProps = {
    customClass: '',
};
