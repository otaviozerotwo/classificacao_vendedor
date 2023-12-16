<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- import bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    
    <!-- import css interno  -->
    <link rel="stylesheet" href="style.css">
    
    <title>Classificação Vendedor</title>
</head>

<?php

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $cidade = $_POST['cidade'];
        $ano = $_POST['ano'];
        $mes = $_POST['mes'];
        $nome = $_POST['nome'];
        $sexo = $_POST['sexo'];
        $cargo = $_POST['cargo'];

        if($cargo == 'Atendente de Farmácia'){
            $cargo = 3;
        }elseif($cargo == 'Atendente de Televendas'){
            $cargo = 2;
        }elseif($cargo == 'Atendente de Manipulação'){
            $cargo = 4;
        }elseif($cargo == 'Auxiliar de Farmácia'){
            $cargo = 5;
        }elseif($cargo == 'Operador de Vendas'){
            $cargo = 10;
        }elseif($cargo == 'Operador de Caixa'){
            $cargo = 9;
        }elseif($cargo == 'Coordenador de Equipe'){
            $cargo = 6;
        }elseif($cargo == 'Farmacêutico'){
            $cargo = 7;
        }elseif($cargo == 'Gerente'){
            $cargo = 8;
        }

        var_dump($cargo);

        $meta_venda = $_POST['meta_venda'];
        $venda_real = $_POST['venda_real'];
        $margem_bruta = $_POST['margem_bruta'];
        $devolucao_real = $_POST['devolucao_real'];
        $meta_desconto_total = $_POST['meta_desconto_total'];
        $desconto_total_real = $_POST['desconto_total_real'];
        $meta_desconto_verba = $_POST['meta_desconto_verba'];
        $desconto_verba_real = $_POST['desconto_verba_real'];
        $meta_clientes = $_POST['meta_clientes'];
        $clientes_atendidos = $_POST['clientes_atendidos'];
        $meta_itens = $_POST['meta_itens'];
        $itens_vendidos = $_POST['itens_vendidos'];
        $dias_trabalhados = $_POST['dias_trabalhados'];
        
        if($meta_desconto_verba <= 5.65){
            $atingiu_meta = 'Atingiu Meta :)';
        }else{
            if($itens_vendidos <= 1136.5){
                if($meta_itens <= 1250.5){
                    if($venda_real <= 9622.34){
                        if($meta_desconto_verba <= 88.38){
                            if($margem_bruta <= 407.44){
                                if($meta_clientes <= 12.5){
                                    if($venda_real <= 843.5){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }
                                }else{
                                    $atingiu_meta = 'Não Atingiu :(';
                                }
                            }else{
                                if($venda_real <= 7302.36){
                                    if($meta_desconto_verba <= 64){
                                        if($venda_real <= 4965.62){
                                            if($meta_desconto_verba <= 41.65){
                                                if($meta_clientes <= 35.5){
                                                    if($meta_desconto_verba <= 34.61){
                                                        if($venda_real <= 2149.39){
                                                            if($meta_desconto_verba <= 18.21){
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }else{
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }else{
                                                    if($venda_real <= 3468.63){
                                                        if($desconto_verba_real <= 16.85){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            if($devolucao_real <= 5.5){
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }else{
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }
                                            }else{
                                                if($venda_real <= 4762.36){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    if($meta_desconto_verba <= 48.48){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }
                                            }
                                        }else{
                                            if($devolucao_real <= 325.41){
                                                if($meta_desconto_verba <= 55.52){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    if($venda_real <= 5832.46){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }
                                    }else{
                                        if($desconto_total_real <= 3534.77){
                                            if($venda_real <= 7019.03){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                if($meta_desconto_verba <= 73.53){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if($meta_desconto_verba <= 79.13){
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }else{
                                        if($venda_real <= 8002.74){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            if($venda_real <= 8505.8){
                                                if($meta_desconto_verba <= 83.59){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            if($meta_desconto_verba <= 91.78){
                                if($venda_real <= 9004.74){
                                    $atingiu_meta = 'Não Atingiu :(';
                                }else{
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }
                            }else{
                                $atingiu_meta = 'Não Atingiu :(';
                            }
                        }
                    }else{
                        if($meta_desconto_verba <= 121.35){
                            if($meta_desconto_verba <= 104.40){
                                $atingiu_meta = 'Atingiu Meta :)';
                            }else{
                                if($venda_real <= 11.05){
                                    if($meta_desconto_verba <= 106.42){
                                        if($margem_bruta <= 3180.42){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }else{
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }
                                }else{
                                    if($margem_bruta <= 3078.57){
                                        if($meta_desconto_total <= 3920.22){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }else{
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }
                                }
                            }
                        }else{
                            if($venda_real <= 13656.23){
                                if($meta_desconto_verba <= 130.22){
                                    if($venda_real <= 12438.95){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }
                                }else{
                                    $atingiu_meta = 'Não Atingiu :(';
                                }
                            }else{
                                if($meta_desconto_verba <= 166.01){
                                    if($venda_real <= 14.33){
                                        if($meta_desconto_verba <= 140.41){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }else{
                                        if($meta_desconto_verba <= 153){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            if($venda_real <= 15.60){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }
                                    }
                                }else{
                                    if($venda_real <= 20007.47){
                                        if($meta_desconto_verba <= 180.84){
                                            if($venda_real <= 17110.54){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }else{
                                            if($meta_desconto <= 192.84){
                                                if($venda_real <= 18.53){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }
                                    }else{
                                        if($meta_desconto_verba <= 240){
                                            if($venda_real <= 21608.76){
                                                if($meta_desconto_verba <= 209.99){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    if($meta_itens <= 771){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }else{
                                            if($venda_real <= 25089.11){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                if($meta_desconto_verba <= 294.92){
                                                    if($venda_real <= 27399.73){
                                                        if($meta_desconto_verba <= 262.5){
                                                            if($meta_clientes <= 406){
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }else{
                                                                if($meta_clientes <= 1124){
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }else{
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }
                                                            }
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }else{
                                                    if($venda_real <= 30021.97){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        if($meta_desconto_verba <= 336.40){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            if($venda_real <= 33868){
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }else{
                                                                if($itens_vendidos <= 577.5){
                                                                    if($meta_itens <= 579.5){
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }else{
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }
                                                                }else{
                                                                    if($meta_clientes <= 610){
                                                                        if($venda_real <= 35109.93){
                                                                            if($meta_desconto_verba <= 346.08){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }else{
                                                                        if($margem_bruta <= 36924.34){
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    if($venda_real <= 36666.01){
                        if($meta_desconto_total <= 10489.21){
                            if($desconto_total_real <= 12209.63){
                                $atingiu_meta = 'Não Atingiu :(';
                            }else{
                                $atingiu_meta = 'Atingiu Meta :)';
                            }
                        }else{
                            if($margem_bruta <= 21808.82){
                                if($itens_vendidos <= 1135.5){
                                    if($desconto_total_real <= 18645.44){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        if($desconto_verba_real <= 383.26){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }
                                }else{
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }
                            }else{
                                if($meta_desconto_verba <= 357.55){
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }else{
                                    $atingiu_meta = 'Não Atingiu :(';
                                }
                            }
                        }
                    }else{
                        if($meta_desconto_verba <= 474.29){
                            if($meta_desconto_verba <= 395.34){
                                $atingiu_meta = 'Atingiu Meta :)';
                            }else{
                                if($venda_real <= 41424.87){
                                    $atingiu_meta = 'Não Atingiu :(';
                                }else{
                                    if($meta_desconto_verba <= 461.78){
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }else{
                                        if($meta_itens <= 1460.5){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }
                                }
                            }
                        }else{
                            if($venda_real <= 48973.52){
                                $atingiu_meta = 'Não Atingiu :(';
                            }else{
                                if($meta_itens <= 1673){
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }else{
                                    $atingiu_meta = 'Não Atingiu :(';
                                }
                            }
                        }
                    }
                }
            }else{
                if($clientes_atendidos <= 889.5){
                    if($meta_clientes <= 1003.5){
                        if($venda_real <= 50121.95){
                            if($meta_desconto_verba <= 470){
                                if($venda_real <= 40888.03){
                                    if($meta_desconto_verba <= 380.91){
                                        if($venda_real <= 16012.12){
                                            if($meta_desconto_verba <= 150.05){
                                                if($venda_real <= 12444.61){
                                                    if($meta_desconto_verba <= 117.74){
                                                        if($meta_itens <= 491.5){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    if($meta_desconto_verba <= 138.24){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($venda_real <= 14231.18){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            if($venda_real <= 14647.34){
                                                                if($meta_desconto_verba <= 145.60){
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }else{
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }
                                                            }else{
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }
                                                        }
                                                    }
                                                }
                                            }else{
                                                if($meta_desconto_verba <= 158.18){
                                                    if($venda_real <= 15.05){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }
                                        }else{
                                            if($meta_desconto_verba <= 177){
                                                if($venda_real <= 16188.92){
                                                    if($meta_desconto_verba <= 162.50){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                if($venda_real <= 18372.09){
                                                    if($venda_real <= 17916.52){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        if($meta_desconto_verba <= 182.10){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }
                                                }else{
                                                    if($venda_real <= 32715.04){
                                                        if($meta_desconto_verba <= 309.95){
                                                            if($meta_desconto_verba <= 210.42){
                                                                if($venda_real <= 18803.45){
                                                                    if($meta_desconto_verba <= 188.11){
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }else{
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }
                                                                }else{
                                                                    if($venda_real <= 20426.86){
                                                                        if($meta_desconto_verba <= 202.58){
                                                                            if($meta_clientes <= 210){
                                                                                if($meta_itens <= 625){
                                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                                }else{
                                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                                }
                                                                            }else{
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }
                                                                        }else{
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }
                                                                    }else{
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }
                                                                }
                                                            }else{
                                                                if($venda_real <= 24814.16){
                                                                    if($meta_desconto_verba <= 233.17){
                                                                        if($venda_real <= 22195.17){
                                                                            if($venda_real <= 21229.71){
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }else{
                                                                                if($meta_desconto_verba <= 222.25){
                                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                                }else{
                                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                                }
                                                                            }
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }else{
                                                                        if($venda_real <= 24535.59){
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }else{
                                                                            if($meta_desconto_verba <= 252.69){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }
                                                                        }
                                                                    }
                                                                }else{
                                                                    if($meta_desconto_verba <= 293.49){
                                                                        if($venda_real <= 26047.56){
                                                                            if($meta_desconto_verba <= 255.15){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }else{
                                                                        if($venda_real <= 30153.92){
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if($meta_desconto_verba <= 321.71){
                                                                if($venda_real <= 30935.41){
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }else{
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }
                                                            }else{
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }
                                                        }
                                                    }else{
                                                        if($meta_desconto_verba <= 342.62){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            if($venda_real <= 34741.31){
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }else{
                                                                if($venda_real <= 36135.5){
                                                                    if($meta_desconto_verba <= 354.71){
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }else{
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }
                                                                }else{
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if($venda_real <= 39671.60){
                                            if($meta_desconto_verba <= 390.16){
                                                if($venda_real <= 39048.27){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            if($meta_desconto_verba <= 408.09){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }
                                    }
                                }else{
                                    if($meta_desconto_verba <= 444.86){
                                        if($venda_real <= 41967.89){
                                            if($meta_desconto_verba <= 412.66){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }else{
                                        if($venda_real <= 44947.91){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            if($venda_real <= 46187.93){
                                                if($meta_desconto_verba <= 451.92){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }
                                    }
                                }
                            }else{
                                if($meta_desconto_verba <= 490.11){
                                    if($venda_real <= 47553.36){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }
                                }else{
                                    $atingiu_meta = 'Não Atingiu :(';
                                }
                            }
                        }else{
                            if($meta_desconto_verba <= 549.06){
                                if($meta_desconto_verba <= 526.22){
                                    if($meta_desconto_verba <= 517.93){
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }else{
                                        if($venda_real <= 51856.76){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }
                                }else{
                                    if($venda_real <= 52972.94){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }
                                }
                            }else{
                                if($venda_real <= 57721.64){
                                    if($meta_desconto_verba <= 560){
                                        if($venda_real <= 54956.71){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }else{
                                        if($meta_desconto_verba <= 570.42){
                                            if($venda_real <= 56519.57){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }
                                }else{
                                    if($meta_desconto_verba <= 620){
                                        if($venda_real <= 59737.72){
                                            if($meta_desconto_verba <= 594.77){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }else{
                                        if($venda_real <= 67280.71){
                                            if($meta_desconto_verba <= 665.20){
                                                if($venda_real <= 63062.46){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    if($margem_bruta <= 14049.27){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }
                                            }else{
                                                if($venda_real <= 66834.07){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    if($meta_desconto_verba <= 681.99){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }
                                            }
                                        }else{
                                            if($meta_desconto_verba <= 726.50){
                                                if($venda_real <= 69930.91){
                                                    if($meta_desconto_verba <= 691.64){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                if($venda_real <= 75436.71){
                                                    if($venda_real <= 74232.26){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        if($meta_desconto_verba <= 751.36){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }
                                                }else{
                                                    if($meta_desconto_verba <= 840.52){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($venda_real <= 87845.10){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if($itens_vendidos <= 2411){
                            if($cargo <= 2.5){
                                if($meta_itens <= 3145.5){
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }else{
                                    $atingiu_meta = 'Não Atingiu :(';
                                }
                            }else{
                                if($meta_itens <= 2600.5){
                                    if($margem_bruta <= 14688.64){
                                        if($meta_desconto_verba <= 416.78){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }else{
                                        if($desconto_verba_real <= 226.57){
                                            if($meta_desconto_verba <= 636.06){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }
                                }else{
                                    if($venda_real <= 61896.42){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        if($meta_desconto_verba <= 764.01){
                                            if($meta_desconto_verba <= 661.52){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                if($venda_real <= 71155.64){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }
                                }
                            }
                        }else{
                            if($meta_itens <= 3293.5){
                                if($dias_trabalhados <= 19.5){
                                    if($meta_desconto_verba <= 753.43){
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }else{
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }
                                }else{
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }
                            }else{
                                if($itens_vendidos <= 2745){
                                    if($clientes_atendidos <= 817.5){
                                        if($meta_desconto_verba <= 809.99){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }else{
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }
                                }else{
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }
                            }
                        }
                    }
                }else{
                    if($itens_vendidos <= 3397.5){
                        if($meta_clientes <= 1166.5){
                            if($clientes_atendidos <= 1015.5){
                                if($meta_desconto_verba <= 869.77){
                                    if($margem_bruta <= 19631.08){
                                        if($meta_desconto_verba <= 730){
                                            if($meta_itens <= 2872.5){
                                                if($itens_vendidos <= 1789){
                                                    if($meta_desconto_verba <= 227.08){
                                                        if($margem_bruta <= 5616.25){
                                                            if($meta_desconto_verba <= 180.56){
                                                                if($venda_real <= 15216.23){
                                                                    if($dias_trabalhados <= 24.5){
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }else{
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }
                                                                }else{
                                                                    if($itens_vendidos <= 1296.5){
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }else{
                                                                        if($meta_desconto_verba <= 173.72){
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }else{
                                                                            if($venda_real <= 17510.86){
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }else{
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }else{
                                                                if($venda_real <= 19471.08){
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }else{
                                                                    if($margem_bruta <= 5503.81){
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }else{
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }else{
                                                        if($venda_real <= 22906.55){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            if($meta_desconto_verba <= 265.37){
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }else{
                                                                if($margem_bruta <= 8459.88){
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }else{
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if($meta_desconto_total <= 11804.75){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($venda_real <= 30729.24){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            if($desconto_total_real <= 22369.41){
                                                                if($meta_desconto_total <= 20396.69){
                                                                    if($clientes_atendidos <= 901.5){
                                                                        if($meta_clientes <= 976.5){
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }else{
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }
                                                                    }else{
                                                                        if($dias_trabalhados <= 23.5){
                                                                            if($dias_trabalhados <= 22.5){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }
                                                                }else{
                                                                    if($margem_bruta <= 16750.13){
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }else{
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }
                                                                }
                                                            }else{
                                                                if($desconto_verba_real <= 165.23){
                                                                    if($meta_clientes <= 975.5){
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }else{
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }
                                                                }else{
                                                                    if($margem_bruta <= 13783.84){
                                                                        if($dias_trabalhados <= 26){
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }else{
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }else{
                                                if($venda_real <= 67888.12){
                                                    if($meta_desconto_verba <= 640.96){
                                                        if($clientes_atendidos <= 938){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }else{
                                            if($venda_real <= 73838.88){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                if($meta_desconto_verba <= 819.13){
                                                    if($clientes_atendidos <= 995){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }
                                        }
                                    }else{
                                        if($meta_clientes <= 1062){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            if($venda_real <= 70884){
                                                if($meta_desconto_verba <= 687.98){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                if($mes <= 7.5){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    if($margem_bruta <= 21106.26){
                                                        if($meta_desconto_verba <= 849.99){
                                                            if($clientes_atendidos <= 960.5){
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }else{
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if($venda_real <= 88132.91){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        if($meta_desconto_verba <= 1010.10){
                                            if($meta_clientes <= 1147.5){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                if($itens_vendidos <= 2823){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }
                                        }else{
                                            if($venda_real <= 108.74){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }
                                    }
                                }
                            }else{
                                if($venda_real <= 17093.49){
                                    if($meta_itens <= 623.5){
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }else{
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }
                                }else{
                                    if($meta_itens <= 1031){
                                        if($meta_desconto_verba <= 230){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            if($venda_real <= 23013.85){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }
                                    }else{
                                        if($venda_real <= 31201.42){
                                            if($meta_desconto_verba <= 302.42){
                                                if($desconto_total_real <= 3791.41){
                                                    if($dias_trabalhados <= 15.5){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        if($clientes_atendidos <= 1152){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            if($meta_itens <= 3395.5){
                                                if($desconto_total_real <= 4495.52){
                                                    if($meta_itens <= 1409.5){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    if($margem_bruta <= 22946.92){
                                                        if($meta_desconto_verba <= 831.63){
                                                            if($meta_desconto_total <= 24816.03){
                                                                if($mes <= 9.5){
                                                                    if($venda_real <= 33558.66){
                                                                        if($desconto_verba_real <= 159.31){
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }else{
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }
                                                                    }else{
                                                                        if($itens_vendidos <= 2260){
                                                                            if($meta_desconto_verba<= 571.87){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }
                                                                }else{
                                                                    if($desconto_verba_real <= 827.83){
                                                                        if($devolucao_real <= 3.94){
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }else{
                                                                            if($meta_desconto_total <= 14573.28){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                if($margem_bruta <= 11468.23){
                                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                                }else{
                                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                                }
                                                                            }
                                                                        }
                                                                    }else{
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }
                                                                }
                                                            }else{
                                                                if($venda_real <= 74185.04){
                                                                    if($meta_desconto_verba <= 722.27){
                                                                        if($cidade <= 11.5){
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }else{
                                                                            if($mes <= 7.5){
                                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                                            }else{
                                                                                $atingiu_meta = 'Não Atingiu :(';
                                                                            }
                                                                        }
                                                                    }else{
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }
                                                                }else{
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }
                                                            }
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }else{
                                                        if($cidade <= 16.5){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            if($desconto_verba_real <= 598.22){
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }else{
                                                                if($venda_real <= 99181.64){
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }else{
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }else{
                                                if($meta_itens <= 3399){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    if($venda_real <= 84646.13){
                                                        if($meta_itens <= 7280.5){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            if($desconto_verba_real <= 408.52){
                                if($venda_real <= 83742.56){
                                    if($meta_desconto_verba <= 826.02){
                                        if($margem_bruta <= 19394.95){
                                            if($meta_desconto_total <= 20612.61){
                                                if($desconto_verba_real <= 250.97){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            if($meta_desconto_verba <= 787.49){
                                                if($meta_desconto_verba <= 756){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    if($venda_real <= 77502.27){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }
                                            }else{
                                                if($venda_real <= 79213.52){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }
                                    }else{
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }
                                }else{
                                    if($meta_desconto_verba <= 1053){
                                        if($venda_real <= 89680.2){
                                            if($meta_desconto_verba){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }else{
                                            if($meta_desconto_total <= 46215.41){
                                                if($desconto_total_real <= 43769.52){
                                                    if($meta_desconto_verba){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($desconto_verba_real){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                if($clientes_atendidos <= 1216.5){
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }
                                    }else{
                                        if($venda_real <= 110127.41){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            if($meta_itens <= 3820.5){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                if($itens_vendidos <= 3108.5){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                if($meta_itens <= 4040){
                                    if($itens_vendidos <= 2935){
                                        if($meta_itens <= 3422){
                                            if($venda_real <= 65970.64){
                                                if($meta_desconto_verba <= 615.34){
                                                    if($margem_bruta <= 14817.12){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        if($clientes_atendidos <= 1195){
                                                            if($itens_vendidos <= 2724.5){
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }else{
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                if($desconto_verba_real <= 496.52){
                                                    if($meta_desconto_total <= 29366.10){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($dias_trabalhados <= 20.5){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }else{
                                            if($venda_real <= 84358.13){
                                                if($meta_desconto_verba <= 811.25){
                                                    if($meta_clientes <= 1407.5){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }
                                            }else{
                                                if($meta_desconto_verba <= 995.11){
                                                    if($desconto_total_real <= 49285.9){
                                                        if($dias_trabalhados <= 25.5){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            if($devolucao_real <= 531.01){
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }else{
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }
                                                        }
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    if($margem_bruta <= 26499.88){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        if($meta_desconto_verba <= 1143.96){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if($meta_desconto_verba <= 1219.58){
                                            if($venda_real <= 95761.75){
                                                if($meta_desconto_verba <= 938.32){
                                                    if($meta_desconto_verba <= 898.19){
                                                        if($margem_bruta <= 19743.56){
                                                            if($itens_vendidos <= 3023){
                                                                $atingiu_meta = 'Atingiu Meta :)';
                                                            }else{
                                                                $atingiu_meta = 'Não Atingiu :(';
                                                            }
                                                        }else{
                                                            if($clientes_atendidos <= 1022){
                                                                if($meta_desconto_verba <= 864.99){
                                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                                }else{
                                                                    $atingiu_meta = 'Não Atingiu :(';
                                                                }
                                                            }else{
                                                                if($meta_clientes <= 1590.5){
                                                                    if($desconto_verba_real <= 437.35){
                                                                        if($clientes_atendidos <= 1154){
                                                                            $atingiu_meta = 'Não Atingiu :(';
                                                                        }else{
                                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                                        }
                                                                    }
                                                                }else{
                                                                    if($dias_trabalhados <= 21.5){
                                                                        $atingiu_meta = 'Não Atingiu :(';
                                                                    }else{
                                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }else{
                                                        if($venda_real <= 91124.41){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                if($cidade <= 2){
                                                    if($meta_desconto_verba <= 1069.69){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($margem_bruta <= 28228.78){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }
                                }else{
                                    if($desconto_total_real <= 45488.97){
                                        if($meta_desconto_verba <= 854.10){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }
                                    }else{
                                        if($meta_desconto_total <= 40193.81){
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }else{
                                            if($desconto_verba_real <= 1022.79){
                                                if($mes <= 3){
                                                    if($clientes_atendidos <= 1209){
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }else{
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if($meta_itens <= 4313){
                            if($clientes_atendidos <= 1024){
                                $atingiu_meta = 'Atingiu Meta :)';
                            }else{
                                if($margem_bruta <= 13939.23){
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }else{
                                    if($itens_vendidos <= 3453.5){
                                        if($meta_desconto_verba <= 1163.44){
                                            if($itens_vendidos <= 3451.5){
                                                if($desconto_verba_real <= 1987.53){
                                                    if($devolucao_real <= 622.35){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($devolucao_real <= 653.39){
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }else{
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }else{
                                            if($meta_itens <= 3862){
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }else{
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }
                                        }
                                    }else{
                                        if($meta_desconto_total <= 59161.44){
                                            if($margem_bruta <= 26733.55){
                                                if($meta_desconto_verba <= 1074.54){
                                                    if($meta_desconto_verba <= 993.89){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        if($dias_trabalhados <= 25.5){
                                                            $atingiu_meta = 'Atingiu Meta :)';
                                                        }else{
                                                            $atingiu_meta = 'Não Atingiu :(';
                                                        }
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }
                                }
                            }
                        }else{
                            if($itens_vendidos <= 4186){
                                if($meta_itens <= 4976){
                                    if($venda_real <= 107238.88){
                                        if($devolucao_real <= 568.36){
                                            if($clientes_atendidos <= 1569.5){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }else{
                                        if($cidade <= 16.5){
                                            if($dias_trabalhados <= 18.5){
                                                if($meta_desconto_verba <= 1185){
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }else{
                                                    $atingiu_meta = 'Não Atingiu :(';
                                                }
                                            }else{
                                                $atingiu_meta = 'Atingiu Meta :)';
                                            }
                                        }else{
                                            if($clientes_atendidos <= 1310.5){
                                                $atingiu_meta = 'Não Atingiu :(';
                                            }else{
                                                if($margem_bruta <= 34524.69){
                                                    if($meta_desconto_verba <= 1250.20){
                                                        $atingiu_meta = 'Atingiu Meta :)';
                                                    }else{
                                                        $atingiu_meta = 'Não Atingiu :(';
                                                    }
                                                }else{
                                                    $atingiu_meta = 'Atingiu Meta :)';
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if($dias_trabalhados <= 25.5){
                                        $atingiu_meta = 'Não Atingiu :(';
                                    }else{
                                        if($desconto_total_real <= 62660.14){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }
                                }
                            }else{
                                if($desconto_total_real <= 49812.43){
                                    $atingiu_meta = 'Atingiu Meta :)';
                                }else{
                                    if($meta_itens <= 5332.5){
                                        $atingiu_meta = 'Atingiu Meta :)';
                                    }else{
                                        if($margem_bruta <= 32495.61){
                                            $atingiu_meta = 'Não Atingiu :(';
                                        }else{
                                            $atingiu_meta = 'Atingiu Meta :)';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
?>
<body>
    <header class="navbar py-3"></header>

    <main class="w-100 m-auto container-modificado">
        <div class="resultado">
            <div class="row text-center mb-4">
                <h1 class="mb-5">Resultado</h1>
            </div>

            <div class="form-floating">
                <div class="text-center h3">
                    <?php echo $atingiu_meta ?>
                </div>

                <div class="my-3">
                    <a class="btn btn-primary w-100" href="index.php">Voltar</a>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer py-3"></footer>
</body>
