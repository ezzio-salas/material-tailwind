import React from "react";
import PropTypes from "prop-types";

export default function CardTable({
 	childrenCols,
	childrenRows,
	childrenHeaders,
	className,
	background = "bg-white",
	round = "xl",
	padding = "p-4",
	hover = false,
}) {
	return (
		<div
			className={`w-full ${background} rounded-${round} overflow-hdden shadow-md ${padding} ${className}  ${
				hover ? "hover:bg-gray-200 cursor-pointer" : ""
			}`}
		>
			<table class="table-auto">
				<thead>
					<tr>{childrenHeaders.map(h=><th>{h}</th>)}</tr>
				</thead>
				<tbody>
					{childrenRows.map((r) => (
						<tr>
							{childrenCols.map((c) => (
								<td>{c}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

CardTable.propTypes = {
	children: PropTypes.node.isRequired,
};
