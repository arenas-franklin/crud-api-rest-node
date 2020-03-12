<style>
    p{
        font-size:14pt;

    }
</style>


<h1> Aplicação API RESTful CRUD  com Node + Express & MongoDB</h1>

<p>
Aplicação  desenvolvida  uma CRUD basico para aprender o funcionamento de uma  api Restful em Node.   
</p>
<hr>

<div>
    <h2>recursos utlizado no desenvolvimento</h2>
    
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Conceito RestFul</li>
    <li>MongoDB</li>
    <li>Mongose</li>
    <li>Visual Studio  Code</li>
    <li>JSON data(para retornnar os dados)</li>
    <li>PostMan (testar a API criada)</li>

</ul>
<hr>
</div>

<div>
 <h2>rotas cridas</h2>

 <table>
    <tr>
    <th>Rotas</th>
    <th>HTTP(verbo)</th>
    <th>Descrição</th>
    </tr>
    <tr>
    <td>/api/produtos</td>
    <td>GET</td>
    <td>Selecionar todos</td>
    </tr>
    <tr>
    <td>/api/produtos</td>
    <td>POST</td>
    <td>Criar Produto</td>
    </tr>
    <tr>
    <td>/api/produtos/:produto_id</td>
    <td>GET</td>
    <td>Selecionar Por Id</td>
    </tr>
    <tr>
    <td>/api/produtos/:produto_id</td>
    <td>PUT</td>
    <td>Atualizar Por Id</td>
    </tr>
    <tr>
    <td>/api/produtos/:produto_id</td>
    <td>DELETE</td>
    <td>Excluir Por Id</td>
    </tr>
 
 </table>   
</div>