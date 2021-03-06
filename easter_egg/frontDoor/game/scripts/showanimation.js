//在showanimation.js中
//动画显示数字格子
function show_number_with_animation(i, j, rand_number) {
    var number_cell = $('#number_cell_' + i + '_' + j);
    number_cell.css('background-color', get_number_background_color(rand_number));
    number_cell.css('color', get_number_color(rand_number));
    number_cell.css('background-image', get_number_background_img(rand_number));
	if (rand_number==2) {
		$("#shadow_cell_0_0").css('background-image', get_number_background_img(rand_number));
	}
	else {
	}
	if (rand_number==4) {
		$("#shadow_cell_0_1").css('background-image', get_number_background_img(rand_number));
	}
	else {
	}
	if (rand_number==8) {
		$("#shadow_cell_0_2").css('background-image', get_number_background_img(rand_number));
	}
	else {
	}	
	/* number_cell.text(rand_number);*/
    number_cell.animate({
        width: cell_side_length,
        height: cell_side_length,
        top: get_pos_top(i, j),
        left: get_pos_left(i, j)
    }, 50);
}

//更新分数
function update_score(score) {
    $('#score').text(score)
}
//在showanimation.js中加入
//格子移动时有动画效果
function show_move_animation(fromx, fromy, tox, toy) {
    var number_cell = $('#number_cell_' + fromx + '_' + fromy);
    number_cell.animate({
        top: get_pos_top(tox, toy),
        left: get_pos_left(tox, toy)
    }, 200);
}
