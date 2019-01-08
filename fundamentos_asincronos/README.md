# **JS ASINCRÓNICO**

## Concurrencia y paralelismo

La concurrencia y paralelismo son conceptos llevados de la mano pero defieren en algunos terminos al definirla

- Concurrencia : Cuando dos o mas tareas progresan simultáneamente
- Paralelismo : Cuando dos o mas tareas se ejecutan , literalmente , a la misma vez.

La diferencia se puede notar en la palabra `progresen` , ya que esto significara que varios procesos se estan ejecutando pero no exactamente al mismo tiempo es decir , el proceso A esta apunto de terminar y pero el proceso B que tambien esta activo pero le falta mucho para terminar.
En cambio el paralelismo es un subcaso de la concurrencia que signicará que se ejecutaran al mismo tiempo y que se terminaran al mismo tiempo.

Personalmente he creido que al hablar de concurrencia en cualquier lenguaje de programacion , yo viniendo de java ,implica necesariamente hablar mas de un thread o hilo. Pero estudiando a profundidad veo que no es cierto.

### Entrelazado (multiplexado)
Es un mecanismo común para implementar concurrencia en escenarios donde los recursos son limitados 
<br>Ejm :<br>
Un sistema operativo haciendo multiples tareas con un solo nucleo ,core . Simplemente divide las tareas en tareas mas pequeñas y las entrelaza, de modo que cada una de ellas se ejecutara en un breve instante.
![explicacion](https://static1.squarespace.com/static/56cdb491a3360cdd18de5e16/t/5a719d69f9619acaaa9943b6/1517395309058/concurrency_es.png?format=1000w)