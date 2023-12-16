<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- import bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">

    </script>
    
    <!-- import css interno  -->
    <link rel="stylesheet" href="style.css">
    
    <title>Classificação Vendedor</title>
</head>
<body>
    <header class="navbar py-3"></header>

    <main class="w-100 m-auto container-modificado">
        <div class="row text-center mb-4">
            <h1 class="mb-5">Classificador de Vendedores</h1>
            <h3>Aprendizado Supervisionado</h3>
        </div>

        <div class="form-floating">
            <form class="form-modificado" action="classificacao.php" method="post">
                <div class="mb-3">
                    <label for="nome" class="mb-1">Nome:</label>
                    <input type="text" name="nome" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label for="cargo" class="mb-1">Cargo:</label>
                    <select name="cargo" class="form-select" required>
                        <option>Atendente de Farmácia</option>
                        <option>Atendente de Televendas</option>
                        <option>Atendente de Manipulação</option>
                        <option>Auxiliar de Farmácia</option>
                        <option>Operador de Vendas</option>
                        <option>Operador de Caixa</option>
                        <option>Coordenador de Equipe</option>
                        <option>Farmacêutico</option>
                        <option>Gerente</option>
                    </select>
                </div>

                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="cidade" class="mb-1">Cidade:</label>
                        <select name="cidade" class="form-select input-modificado" required>
                            <option>Araxá</option>
                            <option>Carmo do Paranaíba</option>
                            <option>Conceição das Alagoas</option>
                            <option>Coromandel</option>
                            <option>Ibiá</option>
                            <option>João Pinheiro</option>
                            <option>Lagoa Formosa</option>
                            <option>Monte Carmelo</option>
                            <option>Paracatu</option>
                            <option>Patos de Minas</option>
                            <option>Patrocínio</option>
                            <option>Presidente Olegário</option>
                            <option>São Gotardo</option>
                            <option>Serra do Salitre</option>
                            <option>Uberaba</option>
                            <option>Unaí</option>
                            <option>Vazante</option>
                        </select>
                    </div>
                    
                    <div class="mb-3">
                        <label for="ano" class="mb-1">Ano:</label>
                        <input type="text" name="ano" class="form-control input-ano-mes" required>
                    </div>
                    
                    <div class="mb-3">
                        <label for="mes" class="mb-1">Mês:</label>
                        <input type="text" name="mes" class="form-control input-ano-mes" required>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="sexo" class="mb-1">Sexo:</label>
                        <select name="sexo" class="form-select input-modificado" required>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </select>
                    </div>

                    <div>
                        <label for="dias_trabalhados" class="mb-1">Dias Trabalhados:</label>
                        <select name="dias_trabalhados" class="form-select input-modificado" required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="meta_venda" class="mb-1">Meta Venda:</label>
                        <input type="text" name="meta_venda" class="form-control input-modificado" required>
                    </div>

                    <div class="mb-3">
                        <label for="venda_real" class="mb-1">Venda Real:</label>
                        <input type="text" name="venda_real" class="form-control input-modificado" required>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="margem_bruta" class="mb-1">Margem Bruta:</label>
                        <input type="text" name="margem_bruta" class="form-control input-modificado" required>
                    </div>
                    <div class="mb-3">
                        <label for="devolucao_real" class="mb-1">Devolução Real:</label>
                        <input type="text" name="devolucao_real" class="form-control input-modificado" required>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="meta_desconto_total" class="mb-1">Meta Desconto Total:</label>
                        <input type="text" name="meta_desconto_total" class="form-control input-modificado" required>
                    </div>
                    <div class="mb-3">
                        <label for="desconto_total_real" class="mb-1">Desconto Total Real:</label>
                        <input type="text" name="desconto_total_real" class="form-control input-modificado" required>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="meta_desconto_verba" class="mb-1">Meta Desconto Verba:</label>
                        <input type="text" name="meta_desconto_verba" class="form-control input-modificado" required>
                    </div>
                    <div class="mb-3">
                        <label for="desconto_verba_real" class="mb-1">Desconto Verba Real:</label>
                        <input type="text" name="desconto_verba_real" class="form-control input-modificado" required>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="meta_clientes" class="mb-1">Meta Clientes:</label>
                        <input type="text" name="meta_clientes" class="form-control input-modificado" required>
                    </div>
                    <div class="mb-3">
                        <label for="clientes_atendidos" class="mb-1">Clientes Atendidos:</label>
                        <input type="text" name="clientes_atendidos" class="form-control input-modificado" required>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="meta_itens" class="mb-1">Meta Itens:</label>
                        <input type="text" name="meta_itens" class="form-control input-modificado" required>
                    </div>
                    <div class="mb-3">
                        <label for="itens_vendidos" class="mb-1">Itens Vendidos:</label>
                        <input type="text" name="itens_vendidos" class="form-control input-modificado" required>
                    </div>
                </div>
                
                <div class="d-flex justify-content-center mt-3">
                    <button type="submit" id="btn-modificado" class="btn btn-primary w-100">Enviar</button>
                </div>
            </form>
        </div>
    </main>

    <footer class="footer py-3"></footer>
</body>
</html>