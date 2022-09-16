import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
	const className = [props.className];
	if (props.isDelete) className.push('notes-item__btndelete');
	if (props.isArchived) className.push('notes-item__btnarchive');
	if (props.isBack) className.push('notfound-container__btnback');

	const onClick = () => {
		if (props.onClick) props.onClick();
	};

	if (props.type === 'link') {
		if (props.isExternal) {
			return (
				<a
					href={props.href}
					className={className.join(' ')}
					style={props.style}
					target={props.target === '_blank' ? '_blank' : undefined}
					// rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
					rel='noopener noreferrer'
				>
					{props.children}
				</a>
			);
		} else {
			return (
				<Link
					to={props.href}
					className={className.join(' ')}
					style={props.style}
					onClick={onClick}
				>
					{props.children}
				</Link>
			);
		}
	}
	return (
		<button
			className={className.join(' ')}
			style={props.style}
			onClick={onClick}
		>
			{props.children}
		</button>
	);
}
Button.propTypes = {
	type: propTypes.oneOf(['button', 'link']),
	onClick: propTypes.func,
	target: propTypes.string,
	href: propTypes.string,
	isDelete: propTypes.bool,
	isArchived: propTypes.bool,
	isBack: propTypes.bool,
};
