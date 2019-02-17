import $ from 'jquery';
const $document = $(document);

$document.ready((event) => {
	const $heading = $('<h1>Hello za worldo</h1>');
	$('#app').append($heading);
});

const exportedItem = {
	name: "Star Platinum",
	ability: "OraOraOra",
}

export default exportedItem;