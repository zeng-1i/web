function bubbleSort(arr){
    for(var i = 0; i < arr.length-1; i++){
        for(var j = 0; j < arr.length - (i+1); j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
}
function changeSortAsc(arr){ //升序排列
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function changeSortDesc(arr){ //降序排列
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}