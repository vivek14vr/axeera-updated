<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(array $payload, int $status): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_value(mixed $value): string
{
    return is_string($value) ? trim($value) : '';
}

function display_label(string $value): string
{
    return ucwords(str_replace('-', ' ', $value));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(['message' => 'Only POST requests are accepted.'], 405);
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    respond(['message' => 'Please submit the form again.'], 400);
}

$name = clean_value($payload['name'] ?? null);
$email = clean_value($payload['email'] ?? null);
$company = clean_value($payload['company'] ?? null);
$phone = clean_value($payload['phone'] ?? null);
$service = clean_value($payload['service'] ?? null);
$budget = clean_value($payload['budget'] ?? null);
$timeline = clean_value($payload['timeline'] ?? null);
$message = clean_value($payload['message'] ?? null);

$validEmail = filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
$hasHeaderBreak = preg_match('/[\r\n]/', $email) === 1;

if (
    strlen($name) < 2 ||
    !$validEmail ||
    $hasHeaderBreak ||
    $company === '' ||
    $service === '' ||
    $budget === '' ||
    $timeline === '' ||
    strlen($message) < 20
) {
    respond(['message' => 'Please complete all required fields before sending your inquiry.'], 400);
}

if (!function_exists('mail')) {
    respond(['message' => 'Email delivery is not enabled on this hosting account yet.'], 503);
}

$recipient = 'info@axeera.com';
$safeService = preg_replace('/[\r\n]+/', ' ', display_label($service)) ?: 'General';
$subject = 'New Project Inquiry: ' . $safeService;
$body = implode("\n", [
    'New project inquiry from the Axeera website',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Company: ' . $company,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Service: ' . display_label($service),
    'Budget: ' . display_label($budget),
    'Timeline: ' . display_label($timeline),
    '',
    'Project details:',
    $message,
]);

$headers = implode("\r\n", [
    'From: Axeera Website <info@axeera.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!mail($recipient, $subject, $body, $headers)) {
    respond(['message' => 'The hosting mail service could not send your inquiry. Please try again shortly.'], 502);
}

respond(['ok' => true], 200);
