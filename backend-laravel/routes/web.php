<?php

namespace App\Http\Controllers;


use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use App\Models\Client;
use Inertia\Inertia;

Route::get('/', function () {
    return view('accueil');
});

//Test routes
Route::get('/blog/{argument}', [MainController::class, 'bg']);

//Enregistrer client
Route::get('/formulaire', [MainController::class, 'formulaire'])->name('formulaire');
Route::post('/formulaire', [MainController::class, 'saveClient']);

//Liste des clients
Route::get('/liste_client', function () {
    $list_clients = Client::all();
    return view('liste_client', [
        'clients' => $list_clients,
    ]);
})->name('liste_client');

//Supprimer un client
Route::delete('/delete_client/{id}', [MainController::class, 'delete_client'])->name('client.delete_cl');

//Edit client
Route::get('/get_client_with_id/{id}', [MainController::class, 'get_one_client'])->name('client.get_client');
Route::put('/edit_client/{id}', [MainController::class, 'update_client'])->name('client.update');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
