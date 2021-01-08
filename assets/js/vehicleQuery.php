<?php 


  

    $url = "https://service.teleport.com.br/teste-veiculo/v1/gql";
   
    $resultado = json_decode(file_get_contents($url));
   
var_dump($resultado);
    // foreach ($resultado->results as $veiculo) {
    //     echo "Personagem: " . $veiculo->marca . "<br>";
    //     echo "Altura: " . $veiculo->modelo . "cm<br>";
    //     echo "Genêro: " . $veiculo->descricao . "cm<br>";

      
    //     echo "<hr>";

    // }
?>